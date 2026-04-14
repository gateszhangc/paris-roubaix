import fs from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const root = process.cwd();
const brandDir = path.join(root, "public", "brand");
const imageDir = path.join(root, "public", "images", "paris-roubaix");
const docsDir = path.join(root, "docs", "branding");
const execFileAsync = promisify(execFile);
const stripOuterSvg = (svg) =>
  svg.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");

const palette = {
  ink: "#101113",
  paper: "#f4efe6",
  stone: "#d9d3c7",
  crimson: "#8d1111",
  brass: "#f0bf5a",
  slate: "#4f5452",
};

const ensureDirs = async () => {
  await fs.mkdir(brandDir, { recursive: true });
  await fs.mkdir(imageDir, { recursive: true });
  await fs.mkdir(docsDir, { recursive: true });
};

const buildMarkSvg = ({ size = 512, compact = false } = {}) => {
  const trackWidth = compact ? 170 : 150;
  const trackHeight = compact ? 270 : 252;
  const cx = size / 2;
  const cy = size / 2;

  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <rect width="${size}" height="${size}" rx="72" fill="${palette.paper}" />
    <g transform="translate(${cx} ${cy})">
      <ellipse rx="${trackWidth}" ry="${trackHeight}" fill="none" stroke="${palette.ink}" stroke-width="34" />
      <ellipse rx="${trackWidth - 38}" ry="${trackHeight - 38}" fill="none" stroke="${palette.brass}" stroke-width="10" stroke-dasharray="18 24" opacity="0.95" />
      <path d="M -112 -16 C -48 -120, 46 -120, 116 -12 C 62 34, 10 56, -44 96 C -82 76, -106 38, -112 -16 Z" fill="${palette.crimson}" opacity="0.96" />
      <g transform="translate(-8 40) rotate(-16)">
        <rect x="-124" y="-26" width="248" height="54" rx="14" fill="${palette.ink}" />
        <rect x="-115" y="-17" width="32" height="36" rx="8" fill="${palette.stone}" />
        <rect x="-72" y="-17" width="32" height="36" rx="8" fill="${palette.stone}" />
        <rect x="-29" y="-17" width="32" height="36" rx="8" fill="${palette.stone}" />
        <rect x="14" y="-17" width="32" height="36" rx="8" fill="${palette.stone}" />
        <rect x="57" y="-17" width="32" height="36" rx="8" fill="${palette.stone}" />
        <rect x="100" y="-17" width="15" height="36" rx="8" fill="${palette.stone}" />
      </g>
      <circle cx="92" cy="-144" r="18" fill="${palette.brass}" />
    </g>
  </svg>`;
};

const buildLogoSvg = () => `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="320" viewBox="0 0 1200 320">
  <rect width="1200" height="320" rx="28" fill="${palette.paper}" />
  <g transform="translate(28 32)">
    <g transform="scale(0.5)">
      ${stripOuterSvg(buildMarkSvg({ size: 512 }))}
    </g>
  </g>
  <g transform="translate(320 78)">
    <text x="0" y="84" font-size="92" font-family="'Arial Narrow', 'Helvetica Neue', sans-serif" font-weight="700" letter-spacing="3" fill="${palette.ink}">PARIS</text>
    <text x="0" y="178" font-size="130" font-family="'Arial Narrow', 'Helvetica Neue', sans-serif" font-weight="800" letter-spacing="2" fill="${palette.crimson}">ROUBAIX</text>
    <text x="6" y="226" font-size="26" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="600" letter-spacing="4" fill="${palette.slate}">HELL OF THE NORTH · 中文速览</text>
    <rect x="0" y="246" width="762" height="6" rx="3" fill="${palette.brass}" />
  </g>
</svg>`;

const buildOgSvg = () => `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${palette.paper}" />
  <rect x="0" y="0" width="1200" height="190" fill="${palette.ink}" />
  <g opacity="0.92" transform="translate(850 58)">
    ${stripOuterSvg(buildMarkSvg({ size: 220, compact: true }))}
  </g>
  <text x="82" y="112" font-size="40" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" letter-spacing="8" fill="${palette.brass}">2026 中文速览</text>
  <text x="76" y="316" font-size="152" font-family="'Arial Narrow', 'Helvetica Neue', sans-serif" font-weight="800" letter-spacing="3" fill="${palette.ink}">PARIS</text>
  <text x="76" y="448" font-size="186" font-family="'Arial Narrow', 'Helvetica Neue', sans-serif" font-weight="800" letter-spacing="2" fill="${palette.crimson}">ROUBAIX</text>
  <text x="82" y="516" font-size="34" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="600" letter-spacing="4" fill="${palette.slate}">RESULTS · ROUTE GUIDE · HISTORY</text>
  <g transform="translate(86 546)">
    <rect width="1026" height="18" rx="9" fill="${palette.ink}" />
    <rect x="12" y="3" width="140" height="12" rx="6" fill="${palette.stone}" />
    <rect x="166" y="3" width="140" height="12" rx="6" fill="${palette.stone}" />
    <rect x="320" y="3" width="140" height="12" rx="6" fill="${palette.stone}" />
    <rect x="474" y="3" width="140" height="12" rx="6" fill="${palette.stone}" />
    <rect x="628" y="3" width="140" height="12" rx="6" fill="${palette.stone}" />
    <rect x="782" y="3" width="140" height="12" rx="6" fill="${palette.stone}" />
    <rect x="936" y="3" width="78" height="12" rx="6" fill="${palette.stone}" />
  </g>
</svg>`;

const philosophy = `# Cobbled Velocity

这套视觉语言把 Paris-Roubaix 理解成一种被磨损出来的秩序：不是靠装饰制造戏剧，而是靠密度、摩擦、压强和节奏。画面必须像石板路本身一样，既粗粝又精确，像是经过无数轮推敲后留下来的必要形状。每一个椭圆、斜线、块面和留白，都要看起来像出自一位对自行车运动、工业材料与编辑设计都极其熟练的人之手，带着明显的 painstaking attention 与 master-level execution。

色彩不走怀旧的棕褐路线，而用炭黑、骨白、深红和黄铜去建立赛事气味：炭黑负责机械与阴影，骨白负责纸张与呼吸，深红负责胜负与风险，黄铜则把荣耀收束成一道冷静而昂贵的亮点。色彩必须被克制地使用，不能平均铺满，而要像比赛里的关键加速点一样，在真正需要时才出现，显示出 meticulously crafted 的节奏感。

形体语言以两种图形为核心：赛车场的椭圆与石板路的矩形切片。椭圆负责历史与终点仪式，石板负责现实中的冲击、颠簸与不可控。两者叠合时，不应该显得“解释性”过强，而应像一张来自假想体育研究机构的图谱，安静却强硬，仿佛经过 countless hours 的校准后，终于把一场赛事压缩成可被观看、可被记忆的结构。

文字要像机械铭牌，而不是宣传口号。用极少的词汇、极强的对比、极稳的间距，把 Paris-Roubaix 的气质钉在画面上。最终成品必须看起来像是为一份高端体育年鉴或博物馆级赛事档案所制作，处处显露 deep expertise、painstaking care 与绝不松手的 craft discipline。`;

const writeTextFiles = async () => {
  await fs.writeFile(
    path.join(docsDir, "paris-roubaix-visual-philosophy.md"),
    philosophy,
    "utf8"
  );
  await fs.writeFile(path.join(brandDir, "paris-roubaix-mark.svg"), buildMarkSvg());
  await fs.writeFile(path.join(brandDir, "paris-roubaix-logo.svg"), buildLogoSvg());
};

const writeRasterFiles = async () => {
  await fs.writeFile(path.join(root, "public", "favicon.svg"), buildMarkSvg({ size: 256, compact: true }));

  await execFileAsync("magick", [
    path.join(brandDir, "paris-roubaix-mark.svg"),
    path.join(brandDir, "paris-roubaix-mark.png"),
  ]);
  await execFileAsync("magick", [
    path.join(brandDir, "paris-roubaix-logo.svg"),
    path.join(brandDir, "paris-roubaix-logo.png"),
  ]);
  await fs.writeFile(path.join(brandDir, "paris-roubaix-og.svg"), buildOgSvg());
  await execFileAsync("magick", [
    path.join(brandDir, "paris-roubaix-og.svg"),
    path.join(brandDir, "paris-roubaix-og.png"),
  ]);
  await execFileAsync("magick", [
    path.join(root, "public", "favicon.svg"),
    path.join(root, "public", "favicon.png"),
  ]);
};

const optimizeImages = async () => {
  await execFileAsync("magick", [
    path.join(imageDir, "hero-cobbles.jpg"),
    "-resize",
    "1800x>",
    "-quality",
    "82",
    path.join(imageDir, "hero-cobbles.webp"),
  ]);

  await execFileAsync("magick", [
    path.join(imageDir, "velodrome.jpg"),
    "-resize",
    "1800x>",
    "-quality",
    "76",
    path.join(imageDir, "velodrome.webp"),
  ]);
};

await ensureDirs();
await writeTextFiles();
await writeRasterFiles();
await optimizeImages();

console.log("Paris-Roubaix branding generated.");
