import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const MODAL_CONFIG = {
    request: {
        id: "request",
        title: "Leave your request",
        subtitle: "Fill in the fields below and send your request. I’ll get back to you as soon as I’m online. I also welcome any feedback, questions, or opinions you’d like to share.",
    },
    review: {
        id: "review",
        title: "What do you think",
        subtitle: "Fill in the fields below and send your review. I’ll get back to you as soon as I’m online. I welcome any feedback or opinions about me you’d like to share.",
    },
    employee: {
        id: "employee",
        title: "Hiring me",
        subtitle: "Great! Please fill in the fields below and send your request. I’ll get back to you as soon as I’m online. I am looking forward to have a great business relationship with your company.",
    },
};

export default new Vuex.Store({
    state: {
        activeModal: null,
        modals: Object.keys(MODAL_CONFIG).reduce((acc, key) => {
            acc[key] = {
                ...MODAL_CONFIG[key],
                isOpen: false,
            };
            return acc;
        }, {}),
    },
    mutations: {
        SET_ACTIVE_MODAL(state, modalKey) {
            state.activeModal = modalKey;
        },
        SET_MODAL_VISIBILITY(state, {modalKey, isOpen}) {
            if (!state.modals[modalKey]) return;
            Vue.set(state.modals[modalKey], "isOpen", isOpen);
        },
    },
    actions: {
        openModal({commit}, modalKey) {
            if (!MODAL_CONFIG[modalKey]) return;
            commit("SET_ACTIVE_MODAL", modalKey);
            commit("SET_MODAL_VISIBILITY", {modalKey, isOpen: true});
        },
        closeModal({commit, state}, modalKey = null) {
            const targetKey = modalKey || state.activeModal;
            if (!targetKey || !MODAL_CONFIG[targetKey]) return;
            commit("SET_MODAL_VISIBILITY", {modalKey: targetKey, isOpen: false});
            if (state.activeModal === targetKey) {
                commit("SET_ACTIVE_MODAL", null);
            }
        },
        openRequestModal({dispatch}) {
            dispatch("openModal", "request");
        },
        openReviewModal({dispatch}) {
            dispatch("openModal", "review");
        },
        openEmployeeModal({dispatch}) {
            dispatch("openModal", "employee");
        },
        closeActiveModal({dispatch}) {
            dispatch("closeModal");
        },
    },
    getters: {
        activeModal(state) {
            return state.activeModal;
        },
        activeModalData(state) {
            if (!state.activeModal) return null;
            return state.modals[state.activeModal] || null;
        },
        modal: (state) => (modalKey) => {
            return state.modals[modalKey] || null;
        },
        isModalOpen: (state) => (modalKey) => {
            return Boolean(state.modals[modalKey]?.isOpen);
        },
    },
});
