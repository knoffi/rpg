import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { MenuCard } from './MenuCard';
import { MenuHTML } from './MenuHTML';
export class Share {
    private menu: MenuHTML;
    constructor(tavern: MenuCard) {
        this.menu = new MenuHTML(tavern);
    }
    public async sendPDF(): Promise<void> {
        try {
            const { uri } = await Print.printToFileAsync({
                html: this.menu.construct(),
            });
            await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
        } catch (error) {
            console.log(error);
        }
    }
}
