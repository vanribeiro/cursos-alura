import { View } from "./view.js";
class MensagemView extends View {
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
export { MensagemView };
//# sourceMappingURL=mensagem-view.js.map