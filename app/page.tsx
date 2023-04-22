"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center items-center">
      <Card className="shadow-lg max-w-4xl mx-auto">
        <Text className="text-5xl font-semibold text-center mb-5">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4b0966]/70 via-[#FF279C]/70 to-[#ff981f]/80">
            Howz Weather
          </span>
          
        </Text>
        <Subtitle className="text-xl text-center">
          Powered by OpenAI, Next.js 13, Tailwind CSS, Tremor 2.0 & More!!
        </Subtitle>

        <Divider className="my-7" />

        <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
          {/* CityPicker */}
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
