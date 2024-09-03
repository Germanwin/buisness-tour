import mainPhotoGalleryTitle from './photo-gallery-block-components/main-photo-gallery-title.vue';
import rightColumnContainer from './photo-gallery-block-components/right-column-container.vue';
import thirdPic from './photo-gallery-block-components/third-pic.vue';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("photo-gallery-block-container") }, });
    // @ts-ignore
    [mainPhotoGalleryTitle,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(mainPhotoGalleryTitle, new mainPhotoGalleryTitle({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({}));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(mainPhotoGalleryTitle, __VLS_1));
    // @ts-ignore
    [thirdPic,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(thirdPic, new thirdPic({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ({}({}));
    const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(thirdPic, __VLS_6));
    // @ts-ignore
    [rightColumnContainer,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(rightColumnContainer, new rightColumnContainer({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    ({}({}));
    const __VLS_14 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(rightColumnContainer, __VLS_11));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['photo-gallery-block-container'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                mainPhotoGalleryTitle: mainPhotoGalleryTitle,
                rightColumnContainer: rightColumnContainer,
                thirdPic: thirdPic,
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
