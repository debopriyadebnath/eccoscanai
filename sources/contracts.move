module WasteManagement::WasteCollector {
    use std::signer;
    use std::vector;
    use aptos_framework::timestamp;

    struct WasteRecord has copy, key, store {
        collector: address,
        waste_type: vector<u8>,
        quantity: u64,
        confidence: u8,
        timestamp: u64
    }

    struct WasteStorage has key {
        records: vector<WasteRecord>
    }

    public entry fun initialize_storage(account: &signer) {
        move_to(account, WasteStorage { records: vector::empty<WasteRecord>() });
    }

    public entry fun submit_waste(
        account: &signer,
        waste_type: vector<u8>,
        quantity: u64,
        confidence: u8
    ) acquires WasteStorage {
        let owner = signer::address_of(account);
        let timestamp = timestamp::now_seconds();

        let waste_record = WasteRecord {
            collector: owner,
            waste_type,
            quantity,
            confidence,
            timestamp
        };

        let storage = borrow_global_mut<WasteStorage>(owner);
        vector::push_back(&mut storage.records, waste_record);
    }

    public fun get_waste_records(owner: address): vector<WasteRecord> acquires WasteStorage {
        let storage = borrow_global<WasteStorage>(owner);
        storage.records
    }
}
