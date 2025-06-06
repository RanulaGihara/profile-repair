"use client";

import { useState } from "react";
import { TextField, Button, Box, Alert, Paper } from "@mui/material";

interface ContactFormProps {
  onSubmit: (data: FormData) => Promise<void>;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await onSubmit(formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <Paper className="p-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextField
          label="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          fullWidth
          required
        />
        <TextField
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          fullWidth
          required
        />
        <TextField
          label="Message"
          multiline
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          fullWidth
          required
        />
        <Box className="flex gap-4 items-center">
          <Button
            type="submit"
            variant="contained"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </Button>
          {status === "success" && (
            <Alert severity="success">Message sent successfully!</Alert>
          )}
          {status === "error" && (
            <Alert severity="error">
              Failed to send message. Please try again.
            </Alert>
          )}
        </Box>
      </form>
    </Paper>
  );
}
