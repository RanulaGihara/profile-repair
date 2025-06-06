"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import {
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
} from "@mui/icons-material";

// Define the props interface
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tags: string[];
}

// Client component using MUI
export function ProjectCard({
  title,
  description,
  image,
  github,
  demo,
  tags,
}: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        className="h-48 object-cover"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>
        <Box className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Typography
              key={tag}
              variant="caption"
              className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full"
            >
              {tag}
            </Typography>
          ))}
        </Box>
        <Box className="flex gap-2 mt-auto">
          <Button
            startIcon={<GitHubIcon />}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            size="small"
          >
            Code
          </Button>
          <Button
            startIcon={<LaunchIcon />}
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="small"
          >
            Demo
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
