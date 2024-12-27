import { IConfig } from "@/types";

const config: IConfig = {
    brandName: process.env.NEXT_PUBLIC_BRAND_NAME ?? "App Name Placeholder"
}

export default config;