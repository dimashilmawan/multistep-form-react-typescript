import FormWrapper from "./FormWrapper";
import Input from "./ui/Input";

type UserData = {
	firstName: string;
	lastName: string;
	age: string;
};

type UserFormProps = UserData & {
	updateFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({
	firstName,
	lastName,
	age,
	updateFields,
}: UserFormProps) => {
	return (
		<FormWrapper title="User Detail">
			<Input
				label="First Name"
				autoFocus
				value={firstName}
				onChange={e => updateFields({ firstName: e.target.value })}
			/>
			<Input
				label="Last Name"
				value={lastName}
				onChange={e => updateFields({ lastName: e.target.value })}
			/>
			<Input
				label="Age"
				type="number"
				value={age}
				onChange={e => updateFields({ age: e.target.value })}
			/>
			{/* <label>First Name</label>
			<input
				autoFocus
				required
				value={firstName}
				onChange={e => updateFields({ firstName: e.target.value })}
				// onChange={e => updateFields({ firstName: e.target.value })}
			/> 
			<label>Last Name</label>
			<input
				required
				value={lastName}
				onChange={e => updateFields({ lastName: e.target.value })}
			/>
			<label>Age</label>
			<input
				required
				value={age}
				onChange={e => updateFields({ age: e.target.value })}
			/> */}
		</FormWrapper>
	);
};
export default UserForm;
