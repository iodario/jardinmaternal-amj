interface WaveDividerProps {
  flip?: boolean;
  color?: string;
}

const WaveDivider = ({ flip = false, color = "hsl(145, 40%, 92%)" }: WaveDividerProps) => (
  <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[80px]">
      <path
        d="M0,40 C360,100 720,0 1080,60 C1260,90 1380,50 1440,40 L1440,120 L0,120 Z"
        fill={color}
      />
    </svg>
  </div>
);

export default WaveDivider;
