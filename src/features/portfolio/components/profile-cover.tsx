import { BrandContextMenu } from "@/components/brand-context-menu"

export function ProfileCover() {
  return (
    <BrandContextMenu>
      <div
        className="relative overflow-hidden aspect-2/1 border-x border-line select-none sm:aspect-3/1 screen-line-top screen-line-bottom before:-top-px after:-bottom-px"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/r/BG.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Edge fade — all sides blend into page background */}
        <div className="absolute inset-0 [background:linear-gradient(to_right,hsl(0_0%_100%)_0%,transparent_20%,transparent_80%,hsl(0_0%_100%)_100%),linear-gradient(to_bottom,hsl(0_0%_100%)_0%,transparent_25%,transparent_75%,hsl(0_0%_100%)_100%)] dark:[background:linear-gradient(to_right,hsl(0_0%_3.9%)_0%,transparent_20%,transparent_80%,hsl(0_0%_3.9%)_100%),linear-gradient(to_bottom,hsl(0_0%_3.9%)_0%,transparent_25%,transparent_75%,hsl(0_0%_3.9%)_100%)]" />
      </div>
    </BrandContextMenu>
  )
}
