const texts = {
    en: {
        intro: `This CIDR Calculator helps you determine various properties of an IP address and subnet. Simply enter the IP address and subnet mask in the fields provided to calculate network details.<br><br><p><strong>Features:</strong></p><ul><li>Calculate Network Address</li><li>Determine Broadcast Address</li><li>Count Available IP Addresses</li><li>View Netmask and Hostmask</li><li>Identify IP Class and Private/Public status</li></ul><p>Use this tool to quickly analyze and work with IP address ranges and subnet masks.</p>`,
        title: 'CIDR Calculator',
        ipLabel: 'IP Address',
        netmaskLabel: 'Netmask',
        calculateButton: 'Calculate',
        resultsHeading: 'Results:',
        networkAddressLabel: 'Network Address:',
        broadcastAddressLabel: 'Broadcast Address:',
        numAddressesLabel: 'Number of IP Addresses:',
        hostmaskLabel: 'Hostmask:',
        netmaskResultLabel: 'Netmask:',
        withPrefixlenLabel: 'With Prefixlen:',
        withNetmaskLabel: 'With Netmask:',
        withHostmaskLabel: 'With Hostmask:',
        ipClassLabel: 'IP Class:',
        isPrivateLabel: 'Is Private:',
        footerText: 'Developed by <a href="https://akylson.com" target="_blank">Kanat Akylson</a>'
    },
    ru: {
        intro: `Этот калькулятор CIDR поможет вам определить различные свойства IP-адреса и подсети. Просто введите IP-адрес и маску подсети в предоставленные поля для вычисления деталей сети.<br><br><p><strong>Функции:</strong></p><ul><li>Вычисление сетевого адреса</li><li>Определение широковещательного адреса</li><li>Подсчет доступных IP-адресов</li><li>Просмотр маски сети и маски хоста</li><li>Определение класса IP и частного/публичного статуса</li></ul><p>Используйте этот инструмент для быстрого анализа и работы с диапазонами IP-адресов и масками подсетей.</p>`,
        title: 'Калькулятор CIDR',
        ipLabel: 'IP-адрес',
        netmaskLabel: 'Маска подсети',
        calculateButton: 'Вычислить',
        resultsHeading: 'Результаты:',
        networkAddressLabel: 'Сетевой адрес:',
        broadcastAddressLabel: 'Широковещательный адрес:',
        numAddressesLabel: 'Количество IP-адресов:',
        hostmaskLabel: 'Маска хоста:',
        netmaskResultLabel: 'Маска подсети:',
        withPrefixlenLabel: 'С префиксом:',
        withNetmaskLabel: 'С маской подсети:',
        withHostmaskLabel: 'С маской хоста:',
        ipClassLabel: 'Класс IP:',
        isPrivateLabel: 'Частный:',
        footerText: 'Разработано <a href="https://akylson.com" target="_blank">Kanat Akylson</a>'
    }
};

let currentLang = 'en';

function switchLanguage(lang) {
    currentLang = lang;
    updateTexts();
}

function updateTexts() {
    document.getElementById('intro-text').innerHTML = texts[currentLang].intro;
    document.getElementById('title').innerText = texts[currentLang].title;
    document.getElementById('ip-label').innerText = texts[currentLang].ipLabel;
    document.getElementById('netmask-label').innerText = texts[currentLang].netmaskLabel;
    document.getElementById('calculate-button').innerText = texts[currentLang].calculateButton;
    document.getElementById('results-heading').innerText = texts[currentLang].resultsHeading;
    document.getElementById('network-address-label').innerText = texts[currentLang].networkAddressLabel;
    document.getElementById('broadcast-address-label').innerText = texts[currentLang].broadcastAddressLabel;
    document.getElementById('num-addresses-label').innerText = texts[currentLang].numAddressesLabel;
    document.getElementById('hostmask-label').innerText = texts[currentLang].hostmaskLabel;
    document.getElementById('netmask-result-label').innerText = texts[currentLang].netmaskResultLabel;
    document.getElementById('with-prefixlen-label').innerText = texts[currentLang].withPrefixlenLabel;
    document.getElementById('with-netmask-label').innerText = texts[currentLang].withNetmaskLabel;
    document.getElementById('with-hostmask-label').innerText = texts[currentLang].withHostmaskLabel;
    document.getElementById('ip-class-label').innerText = texts[currentLang].ipClassLabel;
    document.getElementById('is-private-label').innerText = texts[currentLang].isPrivateLabel;
    document.getElementById('footer-text').innerHTML = texts[currentLang].footerText;
}

window.onload = updateTexts;
