import FormWrapper from "./FormWrapper";

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
			<label>First Name</label>
			<input
				autoFocus
				required
				value={firstName}
				onChange={e => updateFields({ firstName: e.target.value })}
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
			/>
		</FormWrapper>
	);
};
export default UserForm;
