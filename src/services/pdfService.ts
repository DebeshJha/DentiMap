import jsPDF from "jspdf";

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

const getProblemsForPDF = (classDistribution: any) => {
  const problems = [];
  
  if (classDistribution.class_1 && classDistribution.class_1.percentage > 5) {
    problems.push({
      name: "Caries (Tooth Decay)",
      confidence: classDistribution.class_1.percentage,
      severity: classDistribution.class_1.percentage > 15 ? "High" : "Moderate",
      description: "Dental caries detected in the scan. This indicates tooth decay that may require dental treatment.",
    });
  }
  
  if (classDistribution.class_2 && classDistribution.class_2.percentage > 5) {
    problems.push({
      name: "Gingivitis (Gum Inflammation)",
      confidence: classDistribution.class_2.percentage,
      severity: classDistribution.class_2.percentage > 15 ? "High" : "Moderate",
      description: "Gum inflammation detected. This condition may lead to periodontal disease if left untreated.",
    });
  }
  
  if (classDistribution.class_3 && classDistribution.class_3.percentage > 5) {
    problems.push({
      name: "Plaque/Tartar Buildup",
      confidence: classDistribution.class_3.percentage,
      severity: classDistribution.class_3.percentage > 15 ? "High" : "Moderate",
      description: "Plaque or tartar buildup detected. Professional cleaning is recommended.",
    });
  }

  if (problems.length === 0) {
    problems.push({
      name: "Healthy Teeth",
      confidence: classDistribution.background?.percentage || 100,
      severity: "None",
      description: "No significant dental issues detected. Continue regular dental hygiene practices.",
    });
  }

  return problems;
};

export const generatePDFReport = async (
  result: AnalysisResult,
  originalImage: string
): Promise<void> => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPosition = 20;

  // Header with DentiMap branding
  doc.setFillColor(37, 99, 235); // Blue color
  doc.rect(0, 0, pageWidth, 40, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("DentiMap", pageWidth / 2, 20, { align: "center" });
  
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("AI-Powered Dental Analysis Report", pageWidth / 2, 30, { align: "center" });

  yPosition = 50;
  doc.setTextColor(0, 0, 0);

  // Report Date
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  doc.text(`Report Generated: ${currentDate}`, 15, yPosition);
  yPosition += 15;

  // Original Image
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Original Scan", 15, yPosition);
  yPosition += 8;

  try {
    const imgWidth = 80;
    const imgHeight = 60;
    doc.addImage(originalImage, "JPEG", 15, yPosition, imgWidth, imgHeight);
    yPosition += imgHeight + 10;
  } catch (error) {
    console.error("Error adding original image:", error);
    yPosition += 10;
  }

  // Segmented Image
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("AI Segmentation Result", 15, yPosition);
  yPosition += 8;

  try {
    const imgWidth = 80;
    const imgHeight = 60;
    doc.addImage(result.segmentedImage, "JPEG", 15, yPosition, imgWidth, imgHeight);
    yPosition += imgHeight + 15;
  } catch (error) {
    console.error("Error adding segmented image:", error);
    yPosition += 10;
  }

  // Check if we need a new page
  if (yPosition > pageHeight - 60) {
    doc.addPage();
    yPosition = 20;
  }

  // Detected Problems Section
  doc.setFillColor(240, 240, 240);
  doc.rect(15, yPosition - 5, pageWidth - 30, 10, "F");
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("Diagnostic Findings", 20, yPosition);
  yPosition += 15;

  const problems = getProblemsForPDF(result.classDistribution);
  problems.forEach((problem, index) => {
    if (yPosition > pageHeight - 40) {
      doc.addPage();
      yPosition = 20;
    }

    // Problem box
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.rect(15, yPosition - 5, pageWidth - 30, 35);

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(`${index + 1}. ${problem.name}`, 20, yPosition);
    
    // Severity badge
    const severityX = pageWidth - 50;
    if (problem.severity === "High") {
      doc.setFillColor(239, 68, 68); // Red
    } else if (problem.severity === "Moderate") {
      doc.setFillColor(234, 179, 8); // Yellow
    } else {
      doc.setFillColor(37, 99, 235);
    }
    doc.roundedRect(severityX, yPosition - 4, 30, 7, 2, 2, "F");
    doc.setFontSize(9);
    doc.setTextColor(255, 255, 255);
    doc.text(problem.severity, severityX + 15, yPosition + 1, { align: "center" });
    doc.setTextColor(0, 0, 0);

    yPosition += 8;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const splitDescription = doc.splitTextToSize(problem.description, pageWidth - 50);
    doc.text(splitDescription, 20, yPosition);
    yPosition += splitDescription.length * 5 + 5;

    doc.setFont("helvetica", "bold");
    doc.text(`Confidence Score: ${problem.confidence.toFixed(2)}%`, 20, yPosition);
    yPosition += 15;
  });

  // Check if we need a new page for segmentation details
  if (yPosition > pageHeight - 60) {
    doc.addPage();
    yPosition = 20;
  }

  // Segmentation Details
  doc.setFillColor(240, 240, 240);
  doc.rect(15, yPosition - 5, pageWidth - 30, 10, "F");
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Detailed Segmentation Analysis", 20, yPosition);
  yPosition += 15;

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  Object.entries(result.classDistribution).forEach(([key, value]) => {
    const className = key.replace("_", " ").charAt(0).toUpperCase() + key.replace("_", " ").slice(1);
    doc.text(`${className}:`, 20, yPosition);
    doc.text(`${value.percentage.toFixed(2)}%`, pageWidth - 40, yPosition);
    yPosition += 7;
  });

  yPosition += 10;

  // Processing Information
  doc.setFontSize(10);
  doc.setFont("helvetica", "italic");
  doc.text(`Analysis completed in ${result.inferenceTime} seconds`, 20, yPosition);
  doc.text(`Image dimensions: ${result.imageShape.join(" x ")} pixels`, 20, yPosition + 6);
  
  // Footer - Model Credits
  const footerY = pageHeight - 30;
  doc.setDrawColor(37, 99, 235);
  doc.setLineWidth(0.5);
  doc.line(15, footerY, pageWidth - 15, footerY);
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("Model Information", pageWidth / 2, footerY + 7, { align: "center" });
  
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("Powered by DentiMap AI", pageWidth / 2, footerY + 13, { align: "center" });
  doc.text("Model Creator: Dr. Debesh Jha and Team", pageWidth / 2, footerY + 18, { align: "center" });
  
  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  doc.text("This analysis is for informational purposes only. Please consult a dental professional for diagnosis.", pageWidth / 2, footerY + 23, { align: "center" });

  // Save the PDF
  const fileName = `DentiMap_Analysis_${new Date().toISOString().split("T")[0]}.pdf`;
  doc.save(fileName);
};

