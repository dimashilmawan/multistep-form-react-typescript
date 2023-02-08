import FormWrapper from "./FormWrapper";
type AddressData = {
	street: string;
	city: string;
	state: string;
	zip: string;
};

type AddressFormProps = AddressData & {
	updateFields: (fields: Partial<AddressData>) => void;
};

const AddressForm = ({
	city,
	state,
	zip,
	street,
	updateFields,
}: AddressFormProps) => {
	return (
		<FormWrapper title="Address Detail">
			<label>street</label>
			<input
				autoFocus
				required
				value={street}
				onChange={e => updateFields({ street: e.target.value })}
			/>
			<label>city</label>
			<input
				required
				value={city}
				onChange={e => updateFields({ city: e.target.value })}
			/>
			<label>state</label>
			<input
				required
				value={state}
				onChange={e => updateFields({ state: e.target.value })}
			/>
			<label>Zip</label>
			<input
				required
				value={zip}
				onChange={e => updateFields({ zip: e.target.value })}
			/>
		</FormWrapper>
	);
};
export default AddressForm;
