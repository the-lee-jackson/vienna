export function formatDataForItem(date: Date) {
    return date.toLocaleDateString('en-us', {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    })
}