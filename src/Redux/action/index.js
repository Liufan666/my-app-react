export const INCREASE = 'INCREASE';
export const REDUCE = 'REDUCE';
export const INIT = 'INIT';
export function increaseAction() {
    return {
        type: INCREASE
    }
}
export function reduceAction() {
    return {
        type: REDUCE
    }
}
export function initAction() {
    return {
        type: INIT
    }
}