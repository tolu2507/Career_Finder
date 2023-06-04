import tw from "tailwind-styled-components";

export const StyledLoginContainer = tw.div`relative bg-gradient-to-tr from-background-dark to-background-light min-h-[640px] md:min-w-[1366px] md:min-h-[925px] h-screen w-screen ;`;
export const StyledLoginScreenContainer = tw.div`w-full h-full md:columns-2 px-5 md:gap-0 md:px-40 md:py-10 py-5 ;`;
export const StyledLoginRightColumn = tw.div`md:h-[100%] py-8 md:py-0 flex items-center md:text-left text-pink ;`;
export const StyledLoginLeftColumn = tw.div`rounded-xl md:h-[100%] flex-1 bg-white p-4 ;`;