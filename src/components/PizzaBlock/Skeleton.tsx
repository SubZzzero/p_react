
import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader"


const Skeleton: React.FC<IContentLoaderProps> = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={300}
        height={499}
        viewBox="0 0 300 499"
        backgroundColor="#ffffff"
        foregroundColor="#f6f5f4"
        {...props}
    >
        <rect x="0" y="0" rx="30" ry="30" width="300" height="499" />
    </ContentLoader>
)

export default Skeleton;

