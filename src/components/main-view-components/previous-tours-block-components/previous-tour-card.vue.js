export default (await import('vue')).defineComponent({
    props: {
        imgPath: {
            type: String,
            required: true,
        },
        Date: {
            type: String,
            required: true,
        },
        Title: {
            type: String,
            required: true,
        }
    },
});
;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("previous-tour-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ alt: ("yes"), src: ((__VLS_ctx.imgPath)), });
    // @ts-ignore
    [imgPath,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("previous-tour-card-date") }, });
    (Date);
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("previous-tour-card-title") }, });
    (__VLS_ctx.Title);
    // @ts-ignore
    [Title,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['previous-tour-card'];
        __VLS_styleScopedClasses['previous-tour-card-date'];
        __VLS_styleScopedClasses['previous-tour-card-title'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
