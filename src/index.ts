import "./styles/index.css";

// Pro mode
export { ProPage, type ProPageProps } from "./components/pro/ProPage";
export { ProHeader, type ProHeaderProps, type ProNavLink } from "./components/pro/ProHeader";
export { ProButton, type ProButtonProps, type ProButtonVariant } from "./components/pro/ProButton";
export { ProLink, type ProLinkProps } from "./components/pro/ProLink";
export { Eyebrow, type EyebrowProps } from "./components/pro/Eyebrow";
export { ProHeadline, type ProHeadlineProps } from "./components/pro/ProHeadline";
export { Highlight, type HighlightProps, type HighlightColor } from "./components/pro/Highlight";
export { ProHero, type ProHeroProps } from "./components/pro/ProHero";
export { ProPhoto, ProGallery, type ProPhotoProps, type ProGalleryProps } from "./components/pro/ProPhoto";
export { ProSection, ProText, type ProSectionProps, type ProTextProps } from "./components/pro/ProSection";
export { ProEntry, type ProEntryProps } from "./components/pro/ProEntry";
export { RoleList, Credentials, type RoleListProps, type Role, type CredentialsProps } from "./components/pro/RoleList";
export { ProAudioCard, type ProAudioCardProps } from "./components/pro/ProAudioCard";
export { ProFooter, type ProFooterProps } from "./components/pro/ProFooter";

// Fun mode
export { FunPage, type FunPageProps, type FunScheme } from "./components/fun/FunPage";
export { FunHeader, type FunHeaderProps, type FunNavLink } from "./components/fun/FunHeader";
export { FunButton, type FunButtonProps, type FunTone } from "./components/fun/FunButton";
export { FunPill, type FunPillProps } from "./components/fun/FunPill";
export {
  FunHeadline,
  FunHeading,
  FunText,
  type FunHeadlineProps,
  type FunHeadingProps,
  type FunTextProps,
} from "./components/fun/FunType";
export { ScribbleHeadline, type ScribbleHeadlineProps } from "./components/fun/ScribbleHeadline";
export { FunHero, type FunHeroProps } from "./components/fun/FunHero";
export { SwatchPicker, DEFAULT_SWATCHES, type SwatchPickerProps, type SwatchOption } from "./components/fun/SwatchPicker";
export { FunPhotoCard, FunFigure, type FunPhotoCardProps, type FunFigureProps } from "./components/fun/FunPhoto";
export { FunCard, FunGrid, FunGlyph, type FunCardProps, type FunGridProps, type FunGlyphProps } from "./components/fun/FunCard";
export { FunSection, type FunSectionProps } from "./components/fun/FunSection";
export { FunPianoPanel, Visualizer, PianoKeys, type FunPianoPanelProps, type VisualizerProps } from "./components/fun/Piano";
export { FunFooter, type FunFooterProps } from "./components/fun/FunFooter";

// Shared
export { ChipRow, type ChipRowProps } from "./components/shared/ChipRow";
export { Transport, type TransportProps } from "./components/shared/Transport";
export { AudioProvider, useAudio, type AudioProviderProps, type AudioState } from "./components/shared/AudioProvider";
export { shatter } from "./effects/shatter";
export { cx, formatTime } from "./utils";
