import Image from "next/image";
import { approachParagraphs } from "../data";
import { Card } from "@/components/ui/card";

export default function ApproachBlock() {
  return (
    <Card className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border-2 border-gray-100">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-blue-950">
        My Teaching Approach
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
          {approachParagraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
        <div className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 rounded-2xl aspect-square overflow-hidden border-2 border-white shadow-inner relative group">
          <Image
            src="/edu-leader3.jpg"
            alt="My Teaching Approach"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
            <p className="text-white font-bold text-xl uppercase tracking-wider">
              Creative & Adaptive
            </p>
            <p className="text-blue-50 text-sm mt-1">Teaching Methods</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
