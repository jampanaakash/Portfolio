/**
 * Mock data for contact form submissions.
 * This simulates backend behavior until the real API is connected.
 */

// Store contact submissions in memory (simulates database)
let contactSubmissions = [];

export const mockSubmitContactForm = async (formData) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  const submission = {
    id: Date.now().toString(),
    ...formData,
    timestamp: new Date().toISOString(),
  };

  contactSubmissions.push(submission);
  console.log("[Mock] Contact form submitted:", submission);

  return {
    success: true,
    message: "Thank you for reaching out! I'll get back to you soon.",
  };
};

export const mockGetSubmissions = () => contactSubmissions;
