defmodule PdscServer.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset
  alias PdscServer.Accounts.{User, Encryption}


  schema "users" do
    field :name, :string
    field :ape, :string
    field :email, :string
    field :password_hash, :string
    field :tyc, :boolean, default: true

    # Declaramos fields virtuales
    field :password, :string, virtual: true
    field :password_confirmation, :string, virtual: true

    timestamps()
  end

  @doc false
  def changeset(%User{} = user, attrs) do
    user
    |> cast(attrs, [:name, :ape, :email, :password, :password_confirmation])
    |> validate_required([:name, :ape, :email])
    |> validate_format(:email, ~r/@/)
    |> validate_length(:password, min: 8)
    |> validate_length(:password, max: 32)
    |> validate_confirmation(:password)
    |> unique_constraint(:email)
    |> downcase_email
    |> encrypt_password
  end
  
  defp encrypt_password(changeset) do
    password = get_change(changeset, :password)

    if password do
      encrypted_password = Encryption.hash_password(password)
      put_change(changeset, :password_hash, encrypted_password)
    else
      changeset
    end
  end

  defp downcase_email(changeset) do
    update_change(changeset, :email, &String.downcase/1)
  end
end
