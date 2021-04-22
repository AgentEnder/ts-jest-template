export function maxBy<T>(array: T[], mapper: (obj: T) => any): T | null {
    let min: T | null = null;
    let minValue: any;

    array.forEach(item => {
        const value = mapper(item);
        if (value < minValue || min === null) {
            min = item;
            minValue = value;
        }
    });

    return min;
}