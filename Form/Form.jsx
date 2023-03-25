//react
import { useRef } from 'react';

//components
import InputBox from '../InputBox/InputBox';
import SubmitButton from '../SubmitButton/SubmitButton';
import Textarea from '../Textarea/Textarea';
import SuccessPopup from '../SuccessPopup/SuccessPopup';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import LinkElement from '../LinkElement/LinkElement';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import HeadingDescription from '../HeadingDescription/HeadingDescription';

//custom hook
import useFormContext from '../../hooks/useFormContext';

//image source
import paperPlane from '../../assets/paper-plane.png';

//styles
import styles from './Form.module.css';

export default function Form({
  imageSource = '',
  description = undefined,
  descriptionHeading = 'no heading provided',
}) {
  const { formFinalState, dispatch, handleSubmit, closePopup } =
    useFormContext();
  const formRef = useRef(null);

  return (
    <div className={styles['form-main']}>
      <div
        className={styles['form-main__imgbox']}
        style={{
          background: `url(${imageSource})`,
        }}
      >
        {description ? (
          <HeadingDescription
            heading={descriptionHeading}
            description={description}
            extraClass={[styles['form-main__imgbox__heading-description-main']]}
          />
        ) : (
          <>&nbsp;</>
        )}
      </div>

      <form
        noValidate
        ref={formRef}
        onSubmit={(e) => handleSubmit(e, formRef)}
        id={'email-form'}
        className={`${styles['form-main__form']}`}
      >
        <div className={styles['form-main__form__basic-information']}>
          {/* name field */}

          <div
            className={
              styles['form-main__form__basic-information__name-and-email']
            }
          >
            <InputBox
              value={formFinalState.name}
              name={'name'}
              onChange={(e) => {
                dispatch({ type: 'resetNameError' });
                dispatch({ type: 'setName', payload: e.target.value });
              }}
              labelText={'Name'}
              placeholder={'Your name here'}
              errorText={formFinalState.nameError}
            />

            {/* email field */}
            <InputBox
              value={formFinalState.email}
              name={'email'}
              onChange={(e) => {
                dispatch({ type: 'resetEmailError' });
                dispatch({ type: 'setEmail', payload: e.target.value });
              }}
              type={'email'}
              labelText={'Email'}
              placeholder={'Your email address here'}
              errorText={formFinalState.emailError}
            />
          </div>

          {/* subject field */}
          <InputBox
            value={formFinalState.subject}
            name={'subject'}
            onChange={(e) => {
              dispatch({ type: 'resetSubjectError' });
              dispatch({ type: 'setSubject', payload: e.target.value });
            }}
            type={'text'}
            labelText={'Subject'}
            placeholder={'Subject of your message'}
            errorText={formFinalState.subjectError}
          />

          {/* message  field  */}
          <Textarea
            name={'message'}
            value={formFinalState.message}
            onChange={(e) => {
              dispatch({ type: 'resetMessageError' });
              dispatch({ type: 'setMessage', payload: e.target.value });
            }}
            ref={null}
            labelText={'Message'}
            placeholder={'Your message here'}
            errorText={formFinalState.messageError}
          />

          <SubmitButton
            extraClass={[styles['form-main__form__submit-button']]}
            buttonText={'Send'}
            type={'submit'}
            iconImageSource={paperPlane}
          />
        </div>

        <LoadingSpinner
          extraClass={[
            styles['form-main__form__loading-spinner'],
            formFinalState.isPending ? styles['visible'] : styles['hidden'],
          ]}
          isPending={formFinalState.isPending}
        />

        <SuccessPopup
          extraClass={[
            styles['form-main__form__success-popup'],
            formFinalState.messageSent === 'success'
              ? styles['visible']
              : styles['hidden'],
          ]}
          heading={`Thank you ${formFinalState.name}
            `}
          message={
            <>
              I have received your email and will soon get back to you at{' '}
              <span className="highlighted">{formFinalState.email}</span>.
            </>
          }
          buttonText={'Close'}
          onClick={closePopup}
        />

        <ErrorPopup
          extraClass={[
            styles['form-main__form__error-popup'],
            formFinalState.messageSent === 'error'
              ? styles['visible']
              : styles['hidden'],
          ]}
          heading={`Hi, ${formFinalState.name}
            `}
          message={
            <>
              I sincerely apologize for the inconvenience. Looks like your email
              was not sent due to a server error. Please try again later or
              contact me directly at{' '}
              <LinkElement
                text={'nashiuz.zaman@gmail.com'}
                linkFor="external"
                toUrl={'mailto: nashiuz.zaman@gmail.com'}
              />
              . Thank you for your patience.
            </>
          }
          buttonText={'Close'}
          onClick={closePopup}
        />
      </form>
    </div>
  );
}
