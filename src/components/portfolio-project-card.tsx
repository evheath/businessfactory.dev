"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface BrowserFrameProps {
  children: React.ReactNode;
}

interface MobileFrameProps {
  children: React.ReactNode;
}

function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="rounded-3xl overflow-hidden bg-gray-800 border border-gray-700 max-w-[300px] mx-auto">
      <div className="h-6 bg-gray-900 flex items-center justify-center">
        <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
      </div>
      <div className="p-1">{children}</div>
      <div className="h-8 bg-gray-900 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-gray-700"></div>
      </div>
    </div>
  );
}

function BrowserFrame({ children }: BrowserFrameProps) {
  return (
    <div className="rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
      <div className="h-8 bg-gray-900 flex items-center px-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="p-1">{children}</div>
    </div>
  );
}

interface Screenshot {
  url: string;
  type: "web" | "mobile";
}

interface ProjectCardProps {
  title: string;
  technologies: string[];
  screenshots: Screenshot[];
  description: string;
}

interface ProjectCardProps {
  title: string;
  technologies: string[];
  screenshots: Screenshot[];
  description: string;
}

export default function ProjectCard({
  title,
  technologies,
  screenshots,
  description,
}: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length
    );
  };

  const currentScreenshot = screenshots[currentImageIndex];

  if (!currentScreenshot) return null;

  return (
    <Card className="w-full max-w-2xl mx-auto dark">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="bg-gray-800 text-gray-200"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4">
          {currentScreenshot.type === "web" ? (
            <BrowserFrame>
              <div className="aspect-video relative">
                <img
                  src={currentScreenshot.url || "/placeholder.svg"}
                  alt={`Project screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </BrowserFrame>
          ) : (
            <MobileFrame>
              <div className="aspect-[9/16] relative">
                <img
                  src={currentScreenshot.url || "/placeholder.svg"}
                  alt={`Project screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </MobileFrame>
          )}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button
              variant="secondary"
              size="icon"
              onClick={prevImage}
              className="rounded-full bg-gray-800 text-gray-200 opacity-70 hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={nextImage}
              className="rounded-full bg-gray-800 text-gray-200 opacity-70 hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            {screenshots.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentImageIndex ? "bg-gray-200" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
        <CardDescription className="text-sm text-gray-300">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
