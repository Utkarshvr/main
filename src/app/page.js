"use client";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Technologies from "@/components/Technologies/Technologies";
import Timeline from "@/components/TimeLine/TimeLine";
import { Layout } from "@/layout/Layout";
import { Section } from "@/styles/GlobalComponents";

export default function Home() {
  return (
    <Layout>
      <Section block>
        <Hero />
        {/* <BgAnimation /> */}
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      {/* <Acomplishments /> */}
    </Layout>
  );
}
