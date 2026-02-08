import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-neutral-950 antialiased py-12 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto">
                <Link href="/" className="inline-flex items-center text-neutral-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Terug naar home
                </Link>

                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-purple mb-2">
                    Privacybeleid
                </h1>
                <p className="text-neutral-400 mb-8 text-sm">
                    Laatste update: 6 februari 2026
                </p>

                <div className="space-y-8 text-neutral-300 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">1. Inleiding</h2>
                        <p>
                            Bijdehand ("wij", "ons", "onze"), gemaakt door Misha Scholte, is gebouwd op een simpel principe:
                            jouw klantenpassen zijn jouw zaak, niet de onze. Wij geloven dat je privacy niet hoeft op te geven voor gemak.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">2. Gegevensverzameling & Tracking</h2>
                        <p className="mb-2">Wij verzamelen geen persoonlijke gegevens.</p>
                        <ul className="list-disc pl-5 space-y-1 text-neutral-400">
                            <li>Geen accounts of registratie vereist.</li>
                            <li>Geen analytics van derden (geen Google Analytics, geen Firebase, geen Mixpanel).</li>
                            <li>Geen advertentie-SDK's.</li>
                            <li>Geen locatietracking (Toestemming wordt alleen lokaal gebruikt om kaarten in de buurt te sorteren).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">3. Waar jouw data staat</h2>
                        <p>Alle gegevens die je in Bijdehand invoert (kaartnummers, afbeeldingen, notities) worden opgeslagen:</p>
                        <ol className="list-decimal pl-5 space-y-1 mt-2 text-neutral-400">
                            <li>Lokaal op je toestel.</li>
                            <li>In je persoonlijke iCloud (indien ingeschakeld), via CloudKit. Deze gegevens zijn versleuteld door Apple en alleen toegankelijk voor jou. Wij, de ontwikkelaars, hebben geen toegang tot jouw iCloud-gegevens.</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">4. Apple Wallet Integratie</h2>
                        <p className="mb-2">Om de functie "Toevoegen aan Apple Wallet" mogelijk te maken, voeren we een specifieke, beperkte serverhandeling uit:</p>
                        <ul className="list-disc pl-5 space-y-2 text-neutral-400">
                            <li><span className="text-white">Wat er gebeurt:</span> Wanneer je op "Toevoegen aan Wallet" tikt, verstuurt de app de barcode, de naam en de kleur naar een beveiligde server.</li>
                            <li><span className="text-white">Waarom:</span> Apple vereist dat Wallet-passen (.pkpass bestanden) cryptografisch ondertekend worden door een servercertificaat. Dit kan niet veilig op het toestel zelf gebeuren.</li>
                            <li><span className="text-white">Verwerker:</span> Wij gebruiken Scaleway, een hostingprovider gevestigd in Parijs, Frankrijk (AVG/GDPR compliant).</li>
                            <li><span className="text-white">Bewaartermijn:</span> Deze gegevens worden in het geheugen verwerkt om de pas te genereren en worden onmiddellijk verwijderd. Wij loggen of bewaren je kaartgegevens niet.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">5. Diensten van derden</h2>
                        <p className="mb-2">Wij gebruiken de volgende minimale diensten om de app te laten werken:</p>
                        <ul className="list-disc pl-5 space-y-1 text-neutral-400">
                            <li>Apple (VS): Verzorgt app-distributie, betalingsverwerking en crashraportage (alleen als je hiervoor gekozen hebt in je iOS-instellingen).</li>
                            <li>Scaleway (EU/Frankrijk): Hostingprovider voor de Apple Wallet ondertekendienst zoals hierboven beschreven.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">6. Jouw Rechten</h2>
                        <p>
                            Omdat wij geen gegevens van je bewaren, kunnen we je account niet "verwijderen" omdat je er geen bij ons hebt.
                            Om je gegevens te verwijderen, verwijder je simpelweg de app en de bijbehorende data uit je iCloud-instellingen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">7. Contact</h2>
                        <p>
                            Als je vragen hebt over dit beleid, neem dan contact met ons op via <a href="mailto:support@bijdehand.app" className="text-primary hover:text-primary-purple transition-colors">bijdehandapp@proton.me</a> (of support@bijdehand.app).
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
