import ThemeLogo from "@/components/ThemeLogo";
import { useTheme } from "@/contexts/ThemeContext";

const Fallback = () => {
    const { isDark } = useTheme();

    const src = isDark ? '/logo-light-256.webp' : '/logo-dark-256.webp' ;
    const srcSet =  isDark ? '/logo-light-128.webp 128w, /logo-light-256.webp 256w' 
        : '/logo-dark-128.webp 128w, /logo-dark-256.webp 256w';

    return (
        <div className="container p-6 max-w-4xl py-24 text-center space-y-4">
            <div className="flex justify-center">
                <ThemeLogo 
                    name={`${isDark ? 'light' : 'dark'}-loading-logo`}
                    src={src}
                    srcSet={srcSet}
                />
            </div>
            <h1 className="text-3xl font-bold">Loading...</h1>
        </div> 
    )   
};

export default Fallback;
