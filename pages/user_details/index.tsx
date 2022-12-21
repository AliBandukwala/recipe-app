import AppBar from "../../ui_library/appbar/appbar"
import SelectedItemsList from "./components/selected_items_list"
import UserDetailsForm from "./components/user_details_form"

const UserDetails = () => {
    return(
        <div className="flex flex-col h-screen" >
            <AppBar title='Checkout' withBackButton={true} />
            <div className=" flex flex-col md:flex-row" >
                <SelectedItemsList />
                <UserDetailsForm />
            </div>
        </div>
    )
}

export default UserDetails