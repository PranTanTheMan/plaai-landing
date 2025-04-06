import React from "react";
import {
  FiCamera,
  FiClock,
  FiDollarSign,
  FiSliders,
  FiSmile,
  FiUser,
} from "react-icons/fi";
import { IconType } from "react-icons";

export const SimpleGrid = () => (
  <div className="relative z-10 grid grid-cols-2 gap-9 px-3 md:grid-cols-3 md:gap-12 md:px-6">
    <Item
      Icon={FiCamera}
      title="Studio-quality results"
      subtitle="Get professional headshots with perfect lighting, composition, and clarity that rivals professional studio photography."
    />
    <Item
      Icon={FiClock}
      title="Ready in minutes"
      subtitle="No scheduling, no travel, no waiting for edited photos. Get your perfect headshots in minutes, not weeks."
    />
    <Item
      Icon={FiDollarSign}
      title="Fraction of the cost"
      subtitle="Professional headshot sessions can cost hundreds. Our AI solution provides multiple options at a fraction of the price."
    />
    <Item
      Icon={FiSliders}
      title="Customizable styles"
      subtitle="Choose from multiple backgrounds, lighting styles, and professional settings to match your industry and personal brand."
    />
    <Item
      Icon={FiUser}
      title="Personal branding"
      subtitle="Present yourself exactly how you want to be seen. Perfect for LinkedIn, company websites, speaking engagements, and more."
    />
    <Item
      Icon={FiSmile}
      title="Unlimited retakes"
      subtitle="Not happy with your expression? Generate new variations until you find the perfect headshot that represents you."
    />
  </div>
);

const Item = ({
  Icon,
  title,
  subtitle,
}: {
  Icon: IconType;
  title: string;
  subtitle: string;
}) => {
  return (
    <div>
      <h4 className="mb-1.5 flex items-start text-lg font-medium md:text-xl">
        <Icon className="mr-1.5 h-[26px] text-purple-300" />
        {title}
      </h4>
      <p className="text-sm text-zinc-400 md:text-base">{subtitle}</p>
    </div>
  );
};
