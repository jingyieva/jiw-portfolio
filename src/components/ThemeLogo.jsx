// src/components/LcpLogo.jsx

export default function ThemeLogo({ name = 'theme-logo', src, srcSet, alt }) {
    
    return (
        <img
            key={name}     // 切換時強制重載
            src={src}
            srcSet={srcSet}
            sizes="(max-width: 640px) 128px, 256px"
            width={256}
            height={256}
            alt="JIW logo"
            fetchPriority="high"  // LCP 圖保留 high
            decoding="auto"       // 避免強制 async 延後 LCP
        />
    );
}
