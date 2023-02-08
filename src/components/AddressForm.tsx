import FormWrapper from "./FormWrapper";
import Input from "./ui/Input";
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
			<Input
				label="street"
				value={street}
				autoFocus
				onChange={e => updateFields({ street: e.target.value })}
			/>
			<Input
				label="City"
				value={city}
				onChange={e => updateFields({ city: e.target.value })}
			/>
			<Input
				label="State"
				value={state}
				onChange={e => updateFields({ state: e.target.value })}
			/>
			<Input
				label="Zip"
				value={zip}
				onChange={e => updateFields({ zip: e.target.value })}
			/>
			{/* <label>street</label>
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
			/> */}
		</FormWrapper>
	);
};
export default AddressForm;
