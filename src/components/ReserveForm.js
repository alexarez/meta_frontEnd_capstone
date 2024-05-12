import React from 'react'
import styles from './ReserveForm.module.css'
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useEffect } from 'react';
import ReservationSuccess from './ReservationSuccess';

function ReserveForm({ times, updateTimes }) {
      const { register, handleSubmit,
    formState: { errors }, watch,
  } = useForm();

  const [formData, setFormData] = useState();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = '#333';

    return () => {
      document.body.style.backgroundColor = '';
    }
  }, []);

  const onSubmit = handleSubmit((data) => {
    setFormData(data);
    setSubmitted(true);
    updateTimes(data.time);
    console.log(formData);
  });

  const currentDate = getCurrentDate();

  function getCurrentDate() {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    return formattedDate;
  }

  return (
    <div>
      <h1
      style={{
              textAlign: 'center',
              marginBottom: '1em',
              color: '#48742c'
            }}>
      {!submitted ? 'Reserve a Table' : 'Finished'}
      </h1>
      {!submitted ? (
        <form onSubmit={onSubmit} className={styles.reservation}>
        <div
        className={styles['date-time']}
        >
          <div
          className={styles.date}>
            <label htmlFor="date">Date:</label>
            <input
            type="date"
            min={currentDate}
            placeholder='Date'
            {...register("date", {
            required: {
                value: true,
                message: "Date is required"
            }
            })}
            />
            {
          errors.date && <span>{errors.date.message}</span>
          }
          </div>

          <div
          className={styles.time}>
            <label htmlFor="time">Time:</label>
            <select
            {...register("time")}>
              {times.map((time, index) => {
                return (
                  <option key={index}>{time}</option>
                )
                })
              }
            </select>
          </div>
          {
          errors.time && <span>{errors.time.message}</span>
          }
        </div>

        <div className={styles['ocassion-guests']}>
          <div className={styles.ocassion}>
            <label htmlFor="occasion">Occasion:</label>
            <select
            id="occasion"
            {...register("occasion")}
            >
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="engagement">Engagement</option>
            </select>
          </div>

          <div className={styles.guests}>
          <label htmlFor="guests">Number of Guests:</label>
            <select
            id="guests"
            {...register("guests")}>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="other">Other</option>
            </select>
            {
            watch("guests") === "other" && (
                <>
                <input
                type="number"
                placeholder="Number of guests"
                {...register("people", {
                required: {
                    value: true,
                    message: "Number of guests is required"
                },
                min: {
                    value: 11,
                    message: "Must be higher than 10"
                },
                max: {
                    value: 15,
                    message: "The maximum number of guests must be 15"
                }
                })}
                />
                {
                errors.people && <span>{errors.people.message}</span>
                }
                </>
            )
            }
          </div>
        </div>

        <div className={styles['personal-info']}>
          <div className={styles.firstName}>
            <label htmlFor="firstName">First Name:</label>
            <input
            type="text"
            id="firstName"
            {...register("firstName", {
            required: {
                value: true,
                message: "Name is required"
            },
            minLength: {
                value: 2,
                message: "Must have a minimum of 2 characters"
            },
            maxLength: {
                value: 15,
                message: "Must have a maximum of 15 characters"
            }
            })}
            />
            {
            errors.firstName && <span>{errors.firstName.message}</span>
            }
          </div>
          <div className={styles.secondName}>
            <label htmlFor="lastName">Last Name:</label>
            <input
            type="text"
            id="lastName"
            {...register("lastName", {
            required: {
                value: true,
                message: "Name is required"
            },
            minLength: {
                value: 2,
                message: "Must have a minimum of 2 characters"
            },
            maxLength: {
                value: 15,
                message: "Must have a maximum of 15 characters"
            }
            })}
            />
            {
            errors.lastName && <span>{errors.lastName.message}</span>
            }
          </div>
        </div>

        <fieldset className={styles['area-field']}>
        <legend>Choose the Area:</legend>
            <div>
              <input type="radio" id="indoors" value="indoors" name="area"
              {...register("area", {required:"Must choose a prefered area"})}
              />
              <label htmlFor="indoors">Indoors</label>
            </div>
            <div>
              <input type="radio" id="outdoors" value="outdoors" name="area"
              {...register("area", {required:"Must choose a prefered area"})}
              />
              <label htmlFor="outdoors">Outdoors</label>
            </div>
        </fieldset>
        {
        errors.area && <span>{errors.area.message}</span>
        }
        <button onClick={onSubmit} className={styles.submit}>Reserve now</button>
    </form>
    ) : (
    <ReservationSuccess />
  )}
  </div>
  )
}

export default ReserveForm;