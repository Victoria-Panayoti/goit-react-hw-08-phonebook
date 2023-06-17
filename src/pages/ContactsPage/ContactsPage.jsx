import { Contacts } from "components/Contacts/Contacts";
import { Filter } from "components/Filter/Filter";
import { PhonebookForm } from "components/Form/Form";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { ThreeDots } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { useError, useIsLoading } from "redux/hooks"

export const ContactsPage = () => {
    const dispatch = useDispatch();
    const isLoading = useIsLoading();
    const error = useError();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])
    
    return (
        <>
            <Helmet>
                <title>Contacts</title>
            </Helmet>
            <h2>Phonebook</h2>
            <PhonebookForm />
            <h2>Contacts</h2>
            <Filter />
            {isLoading && !error && (
                <ThreeDots
                 height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
            )}
            <Contacts/>
        </>
    )
}