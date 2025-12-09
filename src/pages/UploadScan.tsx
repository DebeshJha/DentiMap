import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FiUpload, FiDownload } from "react-icons/fi";
import { LuBrainCircuit } from "react-icons/lu";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { uploadAndAnalyzeScan } from "@/services/dentimapService";
import { generatePDFReport } from "@/services/pdfService";

interface AnalysisResult {
  segmentedImage: string;
  inferenceTime: number;
  classDistribution: {
    [key: string]: {
      pixel_count: number;
      percentage: number;
    };
  };
  imageShape: number[];
}

const UploadScan = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Invalid File",
          description: "Please select a valid image file",
          variant: "destructive",
        });
        return;
      }

      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setAnalysisResult(null);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      toast({
        title: "No File Selected",
        description: "Please select an image to analyze",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    try {
      const result = await uploadAndAnalyzeScan(selectedFile);
      setAnalysisResult(result);
      toast({
        title: "Analysis Complete",
        description: `Analysis completed in ${result.inferenceTime}s`,
      });
    } catch (error) {
      console.error("Analysis error:", error);
      toast({
        title: "Analysis Failed",
        description: error instanceof Error ? error.message : "Failed to analyze the image",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleDownloadReport = async () => {
    if (!analysisResult || !preview) return;

    try {
      await generatePDFReport(analysisResult, preview);
      toast({
        title: "Report Downloaded",
        description: "Your analysis report has been downloaded successfully",
      });
    } catch (error) {
      console.error("PDF generation error:", error);
      toast({
        title: "Download Failed",
        description: "Failed to generate PDF report",
        variant: "destructive",
      });
    }
  };

  const getProblems = (classDistribution: any) => {
    const problems = [];
    
    if (classDistribution.class_1 && classDistribution.class_1.percentage > 5) {
      problems.push({
        name: "Caries (Tooth Decay)",
        confidence: classDistribution.class_1.percentage,
        severity: classDistribution.class_1.percentage > 15 ? "High" : "Moderate",
        description: "Dental caries detected in the scan. This indicates tooth decay that may require dental treatment."
      });
    }
    
    if (classDistribution.class_2 && classDistribution.class_2.percentage > 5) {
      problems.push({
        name: "Gingivitis (Gum Inflammation)",
        confidence: classDistribution.class_2.percentage,
        severity: classDistribution.class_2.percentage > 15 ? "High" : "Moderate",
        description: "Gum inflammation detected. This condition may lead to periodontal disease if left untreated."
      });
    }
    
    if (classDistribution.class_3 && classDistribution.class_3.percentage > 5) {
      problems.push({
        name: "Plaque/Tartar Buildup",
        confidence: classDistribution.class_3.percentage,
        severity: classDistribution.class_3.percentage > 15 ? "High" : "Moderate",
        description: "Plaque or tartar buildup detected. Professional cleaning is recommended."
      });
    }

    if (problems.length === 0) {
      problems.push({
        name: "Healthy Teeth",
        confidence: classDistribution.background?.percentage || 100,
        severity: "None",
        description: "No significant dental issues detected. Continue regular dental hygiene practices."
      });
    }

    return problems;
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Upload & <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">Analyze</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload your dental scan and let our AI-powered system analyze it for instant diagnosis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FiUpload className="h-5 w-5" />
                Upload Dental Scan
              </CardTitle>
              <CardDescription>
                Select a clear dental image for AI analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                {preview ? (
                  <div className="space-y-4">
                    <img
                      src={preview}
                      alt="Preview"
                      className="max-h-64 mx-auto rounded-lg"
                    />
                    <p className="text-sm text-muted-foreground">
                      {selectedFile?.name}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <FiUpload className="h-12 w-12 mx-auto text-muted-foreground" />
                    <div>
                      <p className="text-lg font-medium">Click to upload</p>
                      <p className="text-sm text-muted-foreground">
                        PNG, JPG, JPEG up to 10MB
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              <Button
                onClick={handleAnalyze}
                disabled={!selectedFile || isAnalyzing}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <LuBrainCircuit className="mr-2 h-5 w-5" />
                    Analyze Scan
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LuBrainCircuit className="h-5 w-5" />
                Analysis Results
              </CardTitle>
              <CardDescription>
                AI-powered segmentation and diagnosis
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isAnalyzing ? (
                <div className="flex flex-col items-center justify-center h-64 space-y-4">
                  <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
                  <p className="text-lg font-medium">Processing your scan...</p>
                  <p className="text-sm text-muted-foreground">
                    Our AI model is analyzing the image
                  </p>
                </div>
              ) : analysisResult ? (
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden border">
                    <img
                      src={analysisResult.segmentedImage}
                      alt="Segmented"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Detected Issues:</h3>
                    {getProblems(analysisResult.classDistribution).map((problem, idx) => (
                      <div key={idx} className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{problem.name}</span>
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            problem.severity === "High" ? "bg-red-500 text-white" :
                            problem.severity === "Moderate" ? "bg-yellow-500 text-white" :
                            "bg-blue-500 text-white"
                          }`}>
                            {problem.severity}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{problem.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span>Confidence:</span>
                          <span className="font-semibold">{problem.confidence.toFixed(2)}%</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Segmentation Details:</h3>
                    <div className="space-y-1 text-sm">
                      {Object.entries(analysisResult.classDistribution).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="capitalize">{key.replace('_', ' ')}:</span>
                          <span className="font-medium">{value.percentage.toFixed(2)}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    Processing time: {analysisResult.inferenceTime}s
                  </div>

                  <Button
                    onClick={handleDownloadReport}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
                    size="lg"
                  >
                    <FiDownload className="mr-2 h-5 w-5" />
                    Download PDF Report
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-center space-y-4">
                  <LuBrainCircuit className="h-16 w-16 text-muted-foreground" />
                  <div>
                    <p className="text-lg font-medium">No Analysis Yet</p>
                    <p className="text-sm text-muted-foreground">
                      Upload an image and click analyze to see results
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UploadScan;

