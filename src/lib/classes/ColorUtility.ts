export class ColorUtility {
    static determineColor(language: string): string {
        switch (language) {
            case "Swift":
                return "accent"
            case "Kotlin":
                return "secondary"
            case "Svelte":
                return "primary"
            case "TypeScript":
                return "primary"
            case "PHP":
                return "warning"
            default:
                return "warning"
        }
    }
}