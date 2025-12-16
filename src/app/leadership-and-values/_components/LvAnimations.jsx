export default function LvAnimations() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        @keyframes float-slow {0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-20px) rotate(5deg)}}
        @keyframes float-medium {0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-15px) rotate(-3deg)}}
        @keyframes float-fast {0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-10px) rotate(2deg)}}
        .animate-float-slow{animation:float-slow 8s ease-in-out infinite}
        .animate-float-medium{animation:float-medium 6s ease-in-out infinite}
        .animate-float-fast{animation:float-fast 4s ease-in-out infinite}
      `
      }}
    />
  );
}

