/*
 * Copyright © 2024-2026 Apple Inc. and the Pkl project authors. All rights reserved.
 *
 */

import path from "node:path";
import os from "node:os";

export const CONFIG_JAVA_PATH = "acore.lsp.java.path";

export const CONFIG_LSP_PATH = "acore.lsp.path";

export const CONFIG_LSP_SOCKET_PORT = "acore.lsp.socket.port";

export const CONFIG_LSP_SOCKET_HOST = "acore.lsp.socket.host";

export const CONFIG_LSP_DEBUG_PORT = "acore.lsp.debug.port";

// only used by the LSP server
export const CONFIG_CLI_PATH = "acore.cli.path";

// only used by the LSP server
export const CONFIG_PROJECTS_EXCLUDED_DIRECTORIES = "acore.projects.excludedDirectories";

export const COMMAND_DOWNLOAD_PACKAGE = "acore.downloadPackage";

export const COMMAND_PKL_OPEN_FILE = "pkl.open.file"; // Keep legacy name if LSP sends this specific string, otherwise update to acore.open.file

export const COMMAND_SYNC_PROJECTS = "acore.syncProjects";

export const COMMAND_PKL_CONFIGURE = "acore.configure";

export const COMMAND_OPEN_WORKSPACE_SETTINGS = "workbench.action.openSettings";

export const COMMAND_RELOAD_WORKSPACE_WINDOW = "workbench.action.reloadWindow";

export const BUNDLED_LSP_VERSION = "0.5.3";

/**
 * The directory that pkl-lsp distributions get saved to.
 *
 * Structure: `~/.acore/editor-support/lsp-distributions/<version>/pkl-lsp-<version>.jar`
 */
export const LSP_DISTRIBUTIONS_DIR = path.join(
  os.homedir(),
  ".acore/editor-support/lsp-distributions/",
);