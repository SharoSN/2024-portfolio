"use client";
import { Bot } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { generateAnswer } from "@/app/actions";
import { Label } from "./ui/label";

const ChatBot = () => {
  const [prompt, setPrompt] = useState("");
  const [answers, setAnswers] = useState([{ description: "" }]);

  async function onSubmit() {
    try {
      let a = await generateAnswer(prompt);
      setAnswers(
        Array.isArray(a) ? a : [{ description: "Unexpected response format." }],
        setPrompt(""),
      );
    } catch (error) {
      console.error("Error generating answer:", error);
      setAnswers([
        { description: "Error generating answer. Please try again." },
      ]);
    }
  }

  return (
    <div className="flex flex-col gap-2 max-w-sm items-center space-x-2">
      <div className="grid w-full gap-1.5">
        <Label className="text-gray-300">
          <Bot className="h-10 w-10" />
        </Label>

        <Textarea
          className="bg-black border-none text-white"
          style={{ height: "150px" }}
          placeholder="Generated answers will appear here"
          value={answers.map((data) => data.description).join("\n\n")}
          readOnly
        />
      </div>

      <div className="grid w-full gap-2">
        <Input
          className="bg-black border-none text-white"
          type="text"
          placeholder="Ask personal questions"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <Button
          className="border-none w-full  rounded-full bg-gradient-to-r to-sky-400 from-rose-900 hover:bg-slate-800 text-white mt-3"
          onClick={onSubmit}
          type="submit"
        >
          Ask
        </Button>
      </div>
    </div>
  );
};

export default ChatBot;
