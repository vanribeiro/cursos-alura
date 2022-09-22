import { View } from "./view.js";

class MensagemView extends View<String>{

    protected template(model: string): string{
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }

}

export {
    MensagemView
}