import previousToursContainer from './previous-tours-block-components/previous-tours-container.vue';
import previousToursTitle from './previous-tours-block-components/previous-tours-title.vue';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("previous-tours-block") }, });
    // @ts-ignore
    [previousToursTitle,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(previousToursTitle, new previousToursTitle({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({}));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(previousToursTitle, __VLS_1));
    // @ts-ignore
    [previousToursContainer,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(previousToursContainer, new previousToursContainer({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ({}({}));
    const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(previousToursContainer, __VLS_6));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['previous-tours-block'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                previousToursContainer: previousToursContainer,
                previousToursTitle: previousToursTitle,
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
