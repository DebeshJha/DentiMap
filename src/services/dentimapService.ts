// Service to interact with the Dentimap API on Hugging Face
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://harshithreddy01-dentimap.hf.space/api/v1";

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

export const uploadAndAnalyzeScan = async (file: File): Promise<AnalysisResult> => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${API_BASE_URL}/inference/predict-with-metadata`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `Analysis failed: ${response.statusText}`);
    }

    const data = await response.json();

    // Convert the mask bytes to base64 image
    const maskBytes = data.mask;
    const segmentedImage = `data:image/jpeg;base64,${maskBytes}`;

    return {
      segmentedImage,
      inferenceTime: data.inference_time,
      classDistribution: data.class_distribution,
      imageShape: data.image_shape,
    };
  } catch (error) {
    console.error("Error analyzing scan:", error);
    throw error;
  }
};

export const checkAPIHealth = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    const data = await response.json();
    return data.status === "healthy";
  } catch (error) {
    console.error("API health check failed:", error);
    return false;
  }
};

