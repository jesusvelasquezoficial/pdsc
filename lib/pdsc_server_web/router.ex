defmodule PdscServerWeb.Router do
  use PdscServerWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug :fetch_session
  end

  scope "/", PdscServerWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  scope "/api", PdscServerWeb do
    pipe_through [:api]

    post "/login", SessionController, :create
    post "/signin", UserController, :create
    post "/precioproductoforid", PrecioProductoController, :showForIdproducto
    get "/bcvDesc", BcvController, :indexDescId
    get "/dtdDesc", DtdController, :indexDescId
    get "/dmDesc", DmController, :indexDescId
    get "/lastTasasBcv", BcvController, :lastTasasBcv
    get "/lastTasasDtd", DtdController, :lastTasasDtd
    get "/lastTasasDm", DmController, :lastTasasDm

    resources "/users", UserController
    resources "/productos", ProductoController
    resources "/precioproducto", PrecioProductoController
    resources "/bcv", BcvController
    resources "/dtd", DtdController
    resources "/dm", DmController
    resources "/oil", OilController
    resources "/gold", GoldController
    resources "/btc", BitcoinController
    resources "/ptr", PetroController

    # resources "/users", UserController, except: [:new, :edit]
  end
end
