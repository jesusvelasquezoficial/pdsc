defmodule PdscServerWeb.PetroController do
  use PdscServerWeb, :controller

  alias PdscServer.Tasas
  alias PdscServer.Tasas.Petro

  action_fallback PdscServerWeb.FallbackController

  def index(conn, _params) do
    petro = Tasas.list_petro()
    render(conn, "index.json", petro: petro)
  end

  def create(conn, %{"petro" => petro_params}) do
    with {:ok, %Petro{} = petro} <- Tasas.create_petro(petro_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.petro_path(conn, :show, petro))
      |> render("show.json", petro: petro)
    end
  end

  def show(conn, %{"id" => id}) do
    petro = Tasas.get_petro!(id)
    render(conn, "show.json", petro: petro)
  end

  def update(conn, %{"id" => id, "petro" => petro_params}) do
    petro = Tasas.get_petro!(id)

    with {:ok, %Petro{} = petro} <- Tasas.update_petro(petro, petro_params) do
      render(conn, "show.json", petro: petro)
    end
  end

  def delete(conn, %{"id" => id}) do
    petro = Tasas.get_petro!(id)

    with {:ok, %Petro{}} <- Tasas.delete_petro(petro) do
      send_resp(conn, :no_content, "")
    end
  end
end
