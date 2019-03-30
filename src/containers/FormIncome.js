/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component, createRef } from 'react';
import axios from '../api/axios';

export default class FormIncome extends Component {
  fileRef = createRef();

  state = {
    form: {
      image: '',
      amount: '',
      date: '',
      user: {
        email: '',
        name: '',
        phoneNumber: '',
        instagram: '',
      },
      destination: 'BSM',
      meta: [
        {
          text: 'Setuju untuk setiap uang digunakan',
          description: 'Mau digunain apa aja bebas',
          checked: false,
          code: 'agree',
        },
        {
          text: '10% untuk sumbangan',
          description: 'Mau digunain apa aja bebas',
          checked: false,
          code: 'charity',
        },
        {
          text: 'Buat saya jadi anonymous',
          description: 'Mau digunain apa aja bebas',
          checked: false,
          code: 'anonymous',
        },
      ],
    },
    preview: '',
    loading: false,
  };

  toggleMeta = text => e => {
    const { form } = this.state;
    const newMeta = form.meta.map(meta => {
      if (meta.text === text) {
        return {
          ...meta,
          checked: !meta.checked,
        };
      }
      return meta;
    });

    this.setState({
      form: {
        ...form,
        meta: newMeta,
      },
    });
  };

  onChange = key => e => {
    const { form } = this.state;

    this.setState({
      form: {
        ...form,
        [key]: e.target.value,
      },
    });
  };

  onChangeUser = key => e => {
    const { form } = this.state;

    this.setState({
      form: {
        ...form,
        user: {
          ...form.user,
          [key]: e.target.value,
        },
      },
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { form } = this.state;
    const { history } = this.props;
    const formData = new FormData();
    formData.append('image', form.image);

    this.setState(prevState => ({ loading: !prevState.loading }));

    const {
      data: { path },
    } = await axios.post('/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    try {
      await axios.post('/incomes', {
        ...form,
        image: path,
        meta: form.meta.reduce((carry, meta) => {
          carry[meta.code] = meta.checked;
          return carry;
        }, {}),
      });

      history.push('/terimakasih');
    } catch (err) {
      console.log(err);
    } finally {
      this.setState(prevState => ({ loading: !prevState.loading }));
    }
  };

  triggerFile = () => {
    this.fileRef.current.click();
  };

  uploadFile = e => {
    const [file] = e.target.files;
    const { form } = this.state;

    this.setState({
      form: { ...form, image: file },
      preview: URL.createObjectURL(file),
    });
  };

  render() {
    const { preview, form, loading } = this.state;

    return (
      <div className="w-1/2 mx-auto bg-white shadow p-8 flex flex-col items-center rounded-lg my-8 sm:w-4/5 xs:w-5/6">
        <div className="banner w-32 h-32 rounded-full mb-10" />

        <div className="self-start mb-5">
          <span className="font-semibold tracking-wide text-xl text-blue-gray-primary block">
            Form Penerimaan Sumbangan
          </span>
          <span className="tracking-normal text-blue-gray-secondary leading-relaxed text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{' '}
            <br />
            eiusmod ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          </span>
        </div>
        <form className="w-full" onSubmit={this.onSubmit}>
          <div className="self-start flex justify-between w-full mb-4 xs:flex-wrap sm:flex-wrap">
            <div className="flex flex-col w-1/2 pr-5 sm:w-full xs:w-full xs:p-0 xs:mb-5">
              <label htmlFor="name" className="text-blue-gray-primary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Fulan"
                onChange={this.onChangeUser('name')}
                className="appearance-none bg-blue-gray-background  py-3 px-2 rounded focus:outline-none focus:bg-white border border-blue-gray-background focus:border-blue-gray-background"
              />
            </div>

            <div className="flex flex-col w-1/2 pl-5 sm:w-full xs:w-full xs:p-0">
              <label htmlFor="email" className="text-blue-gray-primary mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={this.onChangeUser('email')}
                placeholder="mail@fulan.com"
                className="appearance-none bg-blue-gray-background  py-3 px-2 rounded focus:outline-none focus:bg-white border border-blue-gray-background focus:border-blue-gray-background"
              />
            </div>
          </div>

          <div className="self-start flex justify-between w-full mb-4 xs:flex-wrap sm:flex-wrap">
            <div className="flex flex-col w-1/2 pr-5 sm:w-full xs:w-full xs:p-0 xs:mb-5">
              <label
                htmlFor="phoneNumber"
                className="text-blue-gray-primary mb-2"
              >
                Nomor Telephone
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                onChange={this.onChangeUser('phoneNumber')}
                placeholder="0812xxxxxx"
                className="appearance-none bg-blue-gray-background  py-3 px-2 rounded focus:outline-none focus:bg-white border border-blue-gray-background focus:border-blue-gray-background"
              />
            </div>

            <div className="flex flex-col w-1/2 pl-5 sm:w-full xs:w-full xs:p-0">
              <label
                htmlFor="instagram"
                className="text-blue-gray-primary mb-2"
              >
                Instagram Account
              </label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                placeholder="@fulan"
                className="appearance-none bg-blue-gray-background  py-3 px-2 rounded focus:outline-none focus:bg-white border border-blue-gray-background focus:border-blue-gray-background"
              />
            </div>
          </div>

          <div className="self-start flex justify-between w-full mb-4 xs:flex-wrap sm:flex-wrap">
            <div className="flex flex-col w-1/2 pr-5 xs:w-full xs:p-0 xs:mb-5">
              <label htmlFor="transfer" className="text-blue-gray-primary mb-2">
                Transfer Menggunakan
              </label>
              <div className="relative">
                <select
                  name="transfer"
                  id="transfer"
                  onChange={this.onChange('destination')}
                  className="block appearance-none bg-blue-gray-background py-3 px-2 rounded focus:outline-none focus:bg-white border border-blue-gray-background focus:border-blue-gray-background w-full"
                >
                  <option value="BSM">Bank Syariah Mandiri</option>
                  <option value="gopay">Gopay</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 pin-r flex items-center px-2 text-grey-darker">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 icon-cheveron-down cursor-pointer fill-gray-800"
                  >
                    <path
                      className="fill-white"
                      fillRule="evenodd"
                      d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-1/2 pl-5 sm:w-full xs:w-full xs:p-0">
              <label htmlFor="jumlah" className="text-blue-gray-primary mb-2">
                Jumlah Transfer
              </label>
              <input
                type="number"
                id="jumlah"
                name="jumlah"
                onChange={this.onChange('amount')}
                placeholder="1000000"
                className="appearance-none bg-blue-gray-background  py-3 px-2 rounded focus:outline-none focus:bg-white border border-blue-gray-background focus:border-blue-gray-background"
              />
            </div>
          </div>

          <div className="self-start flex justify-between w-full mb-4 xs:flex-wrap sm:flex-wrap">
            <div className="flex flex-col w-1/2 pr-5 xs:w-full xs:p-0 xs:mb-5">
              <label htmlFor="transfer" className="text-blue-gray-primary mb-2">
                Bukti Transfer
              </label>

              <button
                className="w-full rounded bg-another-blue-primary text-white py-3 px-2 shadow"
                type="button"
                onClick={this.triggerFile}
              >
                Upload Bukti Transfer
              </button>

              <input
                type="file"
                ref={this.fileRef}
                onChange={this.uploadFile}
                className="hidden"
              />

              {preview && (
                <img
                  className="w-full my-4"
                  alt="preview bukti transfer"
                  src={preview}
                />
              )}
            </div>

            <div className="flex flex-col w-1/2 pl-5 sm:w-full xs:w-full xs:p-0">
              <label htmlFor="tanggal" className="text-blue-gray-primary mb-2">
                Tanggal Transfer
              </label>
              <input
                type="date"
                id="tanggal"
                name="tanggal"
                onChange={this.onChange('date')}
                placeholder="23-03-2019"
                className="appearance-none bg-blue-gray-background py-3 px-2 rounded focus:outline-none focus:bg-white border border-blue-gray-background focus:border-blue-gray-background"
              />
            </div>
          </div>

          <div className="self-start flex justify-between w-full mb-4 xs:flex-wrap sm:flex-wrap">
            <div className="flex flex-col w-1/2 pr-5 xs:w-full xs:p-0 xs:mb-5">
              <span className="tracking-wide text-blue-gray-primary block mb-2">
                Persetujuan Penggunaan Sumbangan
              </span>
              <span className="tracking-normal text-blue-gray-secondary leading-relaxed text-sm">
                Silahkan centang semua pilihan yang anda inginkan ( dapat
                memilih lebih dari satu ).
              </span>
            </div>

            <div className="flex flex-col w-1/2 pl-5 xs:w-full sm:w-full xs:pl-0 sm:pl-0">
              {form.meta.map((meta, index) => (
                <div className="flex items-start mb-3" key={index}>
                  {!meta.checked && (
                    <div
                      className="w-6 h-6 rounded border border-another-blue-primary mr-4 cursor-pointer"
                      onClick={this.toggleMeta(meta.text)}
                    />
                  )}
                  {meta.checked && (
                    <div
                      className="w-6 h-6 rounded bg-another-blue-primary mr-4 flex items-center justify-center cursor-pointer"
                      onClick={this.toggleMeta(meta.text)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="icon-check w-8 h-8"
                      >
                        <path
                          className="fill-gray-100"
                          d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"
                        />
                      </svg>
                    </div>
                  )}
                  <div className="w-5/6">
                    <span className="text-blue-gray-primary block">
                      {meta.text}
                    </span>
                    <span className="tracking-normal text-blue-gray-secondary leading-relaxed text-sm">
                      {meta.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-full">
            <button
              className="w-full rounded-lg bg-another-blue-primary text-white py-3 px-2 shadow"
              type="submit"
            >
              {!loading && <span>Kirim Form pengiriman sumbangan</span>}
              {loading && <i className="fas fa-spinner text-xl fa-spin" />}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
