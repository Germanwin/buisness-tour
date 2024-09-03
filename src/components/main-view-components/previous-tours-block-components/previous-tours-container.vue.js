import previousTourCard from './previous-tour-card.vue';
import img1 from '../../../assets/previous-tours-pics/previous-tour-pic1.png';
import img2 from '../../../assets/previous-tours-pics/previous-tour-pic2.jpg';
import img3 from '../../../assets/previous-tours-pics/previous-tour-pic3.jpg';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("previous-tours-container") }, });
    // @ts-ignore
    [previousTourCard,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(previousTourCard, new previousTourCard({ imgPath: ((__VLS_ctx.img1)), Date: ("Aug 28 2024"), Title: ("Title text"), }));
    const __VLS_1 = __VLS_0({ imgPath: ((__VLS_ctx.img1)), Date: ("Aug 28 2024"), Title: ("Title text"), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ imgPath: ((__VLS_ctx.img1)), Date: ("Aug 28 2024"), Title: ("Title text"), }));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(previousTourCard, __VLS_1));
    // @ts-ignore
    [img1,];
    // @ts-ignore
    [previousTourCard,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(previousTourCard, new previousTourCard({ imgPath: ((__VLS_ctx.img2)), Date: ("Aug 28 2024"), Title: ("Title text"), }));
    const __VLS_6 = __VLS_5({ imgPath: ((__VLS_ctx.img2)), Date: ("Aug 28 2024"), Title: ("Title text"), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ({}({ imgPath: ((__VLS_ctx.img2)), Date: ("Aug 28 2024"), Title: ("Title text"), }));
    const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(previousTourCard, __VLS_6));
    // @ts-ignore
    [img2,];
    // @ts-ignore
    [previousTourCard,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(previousTourCard, new previousTourCard({ imgPath: ((__VLS_ctx.img3)), Date: ("Aug 28 2024"), Title: ("Title text"), }));
    const __VLS_11 = __VLS_10({ imgPath: ((__VLS_ctx.img3)), Date: ("Aug 28 2024"), Title: ("Title text"), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    ({}({ imgPath: ((__VLS_ctx.img3)), Date: ("Aug 28 2024"), Title: ("Title text"), }));
    const __VLS_14 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(previousTourCard, __VLS_11));
    // @ts-ignore
    [img3,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['previous-tours-container'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                previousTourCard: previousTourCard,
                img1: img1,
                img2: img2,
                img3: img3,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
