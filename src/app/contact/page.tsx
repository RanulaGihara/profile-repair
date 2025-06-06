import { ContactForm } from "@/components/ui/ContactForm";

// Server Component
export default function ContactPage() {
  // This function will be passed to the client component
  async function handleSubmit(data: any) {
    "use server"; // Mark this function as a server action

    // Server-side logic here
    console.log("Form data received:", data);
    // You could send emails, save to database, etc.

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return (
    <div className="py-8 container mx-auto px-4 max-w-2xl">
      {/* Server-rendered content */}
      <h1
        className="
        text-4xl font-bold text-center mb-12
        bg-gradient-to-r from-blue-600 to-purple-600
        text-transparent bg-clip-text
      "
      >
        Contact Me
      </h1>

      <p className="text-gray-600 text-center mb-8">
        Have a question or want to work together? Feel free to reach out!
      </p>

      {/* Client-side form component */}
      <ContactForm onSubmit={handleSubmit} />
    </div>
  );
}
