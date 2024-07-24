


// Validate IP address
function isValidIP(ip) {
    const parts = ip.split('.');
    if (parts.length !== 4) return false;
    return parts.every(part => 
        Number(part) >= 0 && Number(part) <= 255 && Number.isInteger(Number(part))
    );
}

// Validate Netmask
function isValidNetmask(netmask) {
    const netmaskInt = parseInt(netmask, 10);
    return netmaskInt >= 0 && netmaskInt <= 32;
}

// Convert decimal to binary
function decimalToBinary(num) {
    return num.toString(2).padStart(8, '0');
}


// Calculate the network details
function calculateCIDR() {
    const ip = [
        document.getElementById('ip_octet1').value,
        document.getElementById('ip_octet2').value,
        document.getElementById('ip_octet3').value,
        document.getElementById('ip_octet4').value
    ].join('.');
    
    const netmask = document.getElementById('netmask').value;

    if (!isValidIP(ip) || !isValidNetmask(netmask)) {
        alert('Invalid IP address or Netmask');
        return;
    }

    const ipAddress = ip.split('.').map(Number);
    const mask = parseInt(netmask, 10);

    // Convert IP to binary
    const ipBinary = ipAddress.map(octet => decimalToBinary(octet)).join('');
    const maskBinary = '1'.repeat(mask) + '0'.repeat(32 - mask);
    
    // Calculate network address
    const networkBinary = ipBinary.substring(0, mask) + '0'.repeat(32 - mask);
    const networkAddress = [
        parseInt(networkBinary.substring(0, 8), 2),
        parseInt(networkBinary.substring(8, 16), 2),
        parseInt(networkBinary.substring(16, 24), 2),
        parseInt(networkBinary.substring(24, 32), 2)
    ].join('.');

    // Calculate broadcast address
    const broadcastBinary = ipBinary.substring(0, mask) + '1'.repeat(32 - mask);
    const broadcastAddress = [
        parseInt(broadcastBinary.substring(0, 8), 2),
        parseInt(broadcastBinary.substring(8, 16), 2),
        parseInt(broadcastBinary.substring(16, 24), 2),
        parseInt(broadcastBinary.substring(24, 32), 2)
    ].join('.');

    // Calculate number of IP addresses
    const numAddresses = Math.pow(2, 32 - mask);

    // Calculate hostmask
    const hostmask = [
        255 - parseInt(maskBinary.substring(0, 8), 2),
        255 - parseInt(maskBinary.substring(8, 16), 2),
        255 - parseInt(maskBinary.substring(16, 24), 2),
        255 - parseInt(maskBinary.substring(24, 32), 2)
    ].join('.');

    // Display results
    document.getElementById('network_address').innerText = networkAddress;
    document.getElementById('broadcast_address').innerText = broadcastAddress;
    document.getElementById('num_addresses').innerText = numAddresses;
    document.getElementById('hostmask').innerText = hostmask;
    document.getElementById('netmask_result').innerText = mask;
    document.getElementById('with_prefixlen').innerText = `${ip}/${mask}`;
    document.getElementById('with_netmask').innerText = `${networkAddress}/${mask}`;
    document.getElementById('with_hostmask').innerText = `${networkAddress}/${hostmask}`;
    document.getElementById('ip_class').innerText = getIPClass(ip);
    document.getElementById('is_private').innerText = isPrivateIP(ip) ? 'Yes' : 'No';
    
    document.getElementById('result').style.display = 'block';
}

// Determine IP class
function getIPClass(ip) {
    const firstOctet = parseInt(ip.split('.')[0], 10);
    if (firstOctet >= 1 && firstOctet <= 126) return 'A';
    if (firstOctet >= 128 && firstOctet <= 191) return 'B';
    if (firstOctet >= 192 && firstOctet <= 223) return 'C';
    return 'Unknown';
}

// Check if IP is private
function isPrivateIP(ip) {
    const [octet1, octet2] = ip.split('.').map(Number);
    return (octet1 === 10) ||
           (octet1 === 172 && octet2 >= 16 && octet2 <= 31) ||
           (octet1 === 192 && octet2 === 168);
}
