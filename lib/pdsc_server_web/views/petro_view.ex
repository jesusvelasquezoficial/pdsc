defmodule PdscServerWeb.PetroView do
  use PdscServerWeb, :view
  alias PdscServerWeb.PetroView

  def render("index.json", %{petro: petro}) do
    %{data: render_many(petro, PetroView, "petro.json")}
  end

  def render("show.json", %{petro: petro}) do
    %{data: render_one(petro, PetroView, "petro.json")}
  end

  def render("petro.json", %{petro: petro}) do
    %{id: petro.id,
      fecha: petro.fecha,
      bolivares: petro.bolivares}
  end
end
