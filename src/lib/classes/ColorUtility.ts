export class ColorUtility {
    static determineColor(language: string): string {
        switch (language) {
            case "Swift":
                return "swift"
            case "Kotlin":
                return "kotlin"
            case "Svelte":
                return "typescript"
            case "TypeScript":
                return "typescript"
            case "PHP":
                return "php"
            default:
                return "neutral"
        }
    }
}