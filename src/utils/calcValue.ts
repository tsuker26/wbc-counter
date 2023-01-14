interface calcParam {
    count: number,
    total: number,
    wbc: string,
}

interface returnCalc {
    relative: number,
    absolute: number,
}

export const calcValue = ({count, total, wbc}: calcParam): returnCalc => {
    const relative = ((count * 100) / total);
    const absolute = (relative * +wbc) / 100
    return {relative, absolute}
}